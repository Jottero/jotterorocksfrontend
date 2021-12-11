import GridLayout from 'react-grid-layout';
import React from "react";
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class Layout extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    const layout = [
        {i: 'main', x: 3, y: 0, w: 20, h: 30, static: true},
        {i: 'b', x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 1, y: 0, w: 1, h: 1}
      ];
    return (
      <ResponsiveGridLayout className="layout" layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key="main">1</div>
        <div key="b">2</div>
        <div key="c">3</div>
      </ResponsiveGridLayout>
    )
  }
}
export default Layout;