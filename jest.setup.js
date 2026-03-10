import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Configure testing library
configure({
  asyncUtilTimeout: 5000,
});

// Custom act function for async operations
const customAct = async (callback) => {
  await act(async () => {
    await callback();
  });
};

global.customAct = customAct;
