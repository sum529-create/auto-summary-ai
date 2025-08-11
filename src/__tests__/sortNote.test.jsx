import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { beforeEach, describe, expect, it, vi } from "vitest";
import notesReducer, { addNote } from "../store/notesSlice"
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "../routerConfig";
import userEvent from "@testing-library/user-event";
import { afterEach } from "node:test";

const mockStorage = {
  getItem: vi.fn(() => Promise.resolve(null)),
  setItem: vi.fn(() => Promise.resolve()),
  removeItem: vi.fn(() => Promise.resolve())
}

const initialState = {
  lists: [
    {
      id: 'ac08588b-b1bd-4647-984f-46c46f890aa4',
      title: 'a안녕하세요',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.29 17:44'
    },
    {
      id: '12bd2d01-f314-4bd2-adea-d36b4eb72591',
      title: 'c안녕하세요2',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.28 17:44'
    },
    {
      id: '12bd2d01-f314-4bd2-adea-d36b4eb72599',
      title: 'b안녕하세요3',
      content: '이것은 테스트용으로 작성된 콘텐츠 입니다. 리스트 테스트용으로서 사용되는 더미 데이터 입니다. 추후 삭제 예정입니다.',
      summary: '테스트용 더미 데이터 텍스트',
      date: '2025.07.26 17:44'
    }
  ],
  sortedType: 'recently'
}

describe("노트 정렬 기능", () => {
  let store, persistor, router;
  beforeEach(() => {
    const persistConfig = {
      key:'test-sorted-notes',
      version: 1,
      storage: mockStorage
    }

    const persistedReducer = persistReducer(persistConfig, notesReducer)

    store = configureStore({
      reducer: {
        notes: persistedReducer
      },
      middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: {
            ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER']
          }
        })
    })
    persistor = persistStore(store);
    router = createMemoryRouter(routerConfig)
  })
  afterEach(() => {
    persistor.purge();
  })
  it('버튼 클릭 시 노트 리스트 정렬', async() => {
    initialState.lists.forEach(e => store.dispatch(addNote(e)))

    const {getByText, getAllByTestId} = render(
      <Provider store={store}>
        <PersistGate loading={<div data-testid="loading">Loading...</div>} persistor={persistor}>
          <RouterProvider router={router}/>
        </PersistGate>
      </Provider>
    )

    const listBtn = getByText('이름 순')
    await userEvent.click(listBtn)

    await waitFor(() => {
      const noteTitleEl = getAllByTestId('note-title')
      expect(noteTitleEl).toHaveLength(3);

      const expectedList = [...initialState.lists].sort((a,b) => a.title.localeCompare(b.title)).map(e => e.title);
      const renderedTitles = screen.getAllByTestId('note-title').map(e => e.textContent)

      expect(renderedTitles).toEqual(expectedList)
    })
  })
})