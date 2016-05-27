import * as React from "react";
import { ShowMoreProps } from './ShowMoreProps'

export class ShowMoreButton extends React.Component<ShowMoreProps, {}> {
  render(){
    const { onShowMore, hasMore, isLoading } = this.props
    if (!hasMore) return null

    if (isLoading) return <button disabled={true}>Loading...</button>
    return (
      <button onClick={onShowMore}>Show More</button>
    );
  }
}
