"use client";
import React, { type Dispatch, type SetStateAction, useState } from "react";
import { cn } from "@/util/cn";

interface TabProps {
  key?: string | number;
  children: string;
  currentVal: string;
  setCurrentVal: Dispatch<SetStateAction<string>>;
}

/**
 * Renders a tab component.
 *
 * @param children - The tab label.
 * @param currentVal - The current tab value.
 * @param setCurrentVal - The function to set the current tab value.
 * @returns  The rendered tab component.
 */
function Tab({
  key,
  children,
  currentVal,
  setCurrentVal,
}: TabProps): React.JSX.Element {
  return (
    <button
      key={key}
      className={cn(currentVal === children ? "border-b border-b-blue-500" : "border-b border-b-transparent", "px-4 py-2")}
      onClick={() => {
        setCurrentVal(children);
      }}
      type="button"
    >
      {children}
    </button>
  );
}

function TabContainer({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <div className="flex">{children}</div>;
}

interface ContentProps {
  currentVal: string;
  forTab: string;
  children: React.ReactNode;
}
/**
 * Renders the content for a tab.
 * @param currentVal - The current tab value.
 * @param forTab - The tab value for which the content is rendered.
 * @param children - The content to render.
 * @returns
 */
function Content({
  currentVal,
  forTab,
  children,
}: ContentProps): React.JSX.Element {
  return <>{currentVal === forTab && children}</>;
}

function ContentContainer({
  children,
}: {
  children:React.ReactNode;
}): React.JSX.Element {
  return <div className="mt-4">{children}</div>;
}

function SimpleTabDemo(): React.JSX.Element {
  const tabData: string[] = ["Tab 1", "Tab 2", "Tab 3"];

  const [currentVal, setCurrentVal] = useState<string>(tabData[0]);

  return (
    <div>
      <TabContainer>
        {
          tabData.map((tab) => {
            return (
              <Tab
                key={tab}
                currentVal={currentVal}
                setCurrentVal={setCurrentVal}
              >
                {tab}
              </Tab>
            );
          
          })
        }
      </TabContainer>
      <ContentContainer>
        <Content currentVal={currentVal} forTab={tabData[0]}>
          <div>Tab 1 content</div>
        </Content>
        <Content currentVal={currentVal} forTab={tabData[1]}>
          <div>Tab 2 content</div>
        </Content>
        <Content currentVal={currentVal} forTab={tabData[2]}>
          <div>Tab 3 content</div>
        </Content>
      </ContentContainer>
    </div>
  );
}

export default SimpleTabDemo;
