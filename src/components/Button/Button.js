import React, { Component } from 'react'
import $ from "jquery"
export default class Button extends Component {
    componentDidMount(){
        $(function() {
            $(".btn-6")
              .on("mouseenter", function(e) {
                var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
                $(this)
                  .find("span")
                  .css({ top: relY, left: relX });
              })
              .on("mouseout", function(e) {
                var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
                $(this)
                  .find("span")
                  .css({ top: relY, left: relX });
              });
            // $("[href=#]").click(function() {
            //   return false;
            // });
          });
    }
    render() {
        return (
            <div className="btn-123">
                <a href="#" className="btn-6">
                      {this.props.children}
                      <span></span>
                    </a>
            </div>
        )
    }
}
