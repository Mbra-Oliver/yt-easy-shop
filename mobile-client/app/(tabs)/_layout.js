import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="products/index"
        options={{
          title: "Products",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
