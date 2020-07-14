import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
const Tabis = () => (
  <Tabs>
    <TabLink to="tab1">Tab1</TabLink>
    <TabLink to="tab2">Tab2</TabLink>
    <TabLink to="tab3">Tab3</TabLink>

    <TabContent for="tab1">/* content for tab #1 */</TabContent>
    <TabContent for="tab2">/* content for tab #2 */</TabContent>
    <TabContent for="tab3">/* content for tab #3 */</TabContent>
  </Tabs>
)

export default Tabis;
