import {
  NavigationContainerRefWithCurrent,
  ParamListBase,
} from "@react-navigation/native";
import React from "react";

export const navigationRef: React.RefObject<
  NavigationContainerRefWithCurrent<ParamListBase>
> = React.createRef();

/**
 * navigation handler
 * @param name --screen name where to navigate
 * @param params
 */
export const navigate = (name: string, params?: object): void => {
  navigationRef.current?.navigate(name, params);
};

/**
 * go back to previous screen
 */
export const goBack = (): void => {
  navigationRef.current?.goBack();
};
