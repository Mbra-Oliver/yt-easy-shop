import { View, Text } from "react-native";
import React, { forwardRef, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";

interface Props {
  title: string;
  children: React.ReactNode;
}

type Ref = BottomSheet;

// Depuis le parent
// const bottomRef= useRef<BottomSheet>(null);

export const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  return (
    <BottomSheet
      index={0}
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
    >
      {props.children}
    </BottomSheet>
  );
});
