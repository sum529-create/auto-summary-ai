import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../store/notesSlice";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { routerConfig } from "../routerConfig";

describe("노트 추가 및 편집 기능", () => {
  it("새로운 노트 추가, Notes Routing, 사이드바에 링크 추가", async() => {
    // 테스트용 store (Redux Persist 없이)
    const testStore = configureStore({
      reducer: {
        notes: notesReducer
      }
    });

    const router = createMemoryRouter(routerConfig);

    const {getAllByText} = render(
      <Provider store={testStore}>
        <RouterProvider router={router}/>
      </Provider>
    )

    // "노트 작성" 버튼들을 모두 찾고, 첫 번째(사이드바)를 클릭
    const noteButtons = getAllByText("노트 작성");
    expect(noteButtons).toHaveLength(2);

    // 첫 번째 버튼(사이드바의 버튼)을 클릭
    await userEvent.click(noteButtons[0]);
    
    await waitFor(() => {
      expect(router.state.location.pathname).toMatch(/^\/notes\/[a-f0-9-]{36}$/);
    })

  })
})