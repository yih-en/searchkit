import * as React from "react";
import {mount} from "enzyme";
import {InfiniteScrollingPagination} from "./InfiniteScrollingPagination";
import {SearchkitManager, ImmutableQuery} from "../../../core";
import {
  fastClick, hasClass, jsxToHTML, printPrettyHtml
} from "../../__test__/TestHelpers"
import * as sinon from "sinon";

describe("InfiniteScrollingPagination tests", () => {

  beforeEach(() => {

    this.searchkit = SearchkitManager.mock()
    this.searchkit.addDefaultQuery((query)=> {
      return query.setSize(10)
    })
    this.createWrapper = (showNumbers=true, pageScope=3, props={}) => {
      this.wrapper = mount(
        <InfiniteScrollingPagination searchkit={this.searchkit}
                    {...props}  />
      );
      this.accessor = this.searchkit.accessors.statefulAccessors["p"]
    }

    this.searchkit.query = new ImmutableQuery().setSize(10)


    this.searchkit.setResults({
      hits:{
        total:80
      }
    })
  });

});
