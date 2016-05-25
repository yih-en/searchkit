import {ValueState} from "../state"
import {StatefulAccessor} from "./StatefulAccessor"


export class InfiniteScrollingAccessor extends StatefulAccessor<ValueState> {
  state = new ValueState()

  onStateChange(oldState={}){
    if(oldState[this.urlKey] == this.state.getValue()){
      this.state = this.state.clear()
    }
  }

  buildOwnQuery(query){
    let from = (query.getSize() || 20) * (Number(this.state.getValue()) -1 )
    console.log("page", this.state.getValue())
    if(from > 0){
      return query.setFrom(from)
    }
    return query
  }
  
  postQuery(query){
    console.log("postQuery")
    if (Number(this.state.getValue()) > 1){
      console.log("IS MORE !!")
      return query.setIsMore(true).removeAggs()
    }
    return query
  }
}
