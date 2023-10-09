// https://ja.legacy.reactjs.org/docs/context.html

import { FC, ReactNode, createContext, useContext } from 'react';
import { useTodo } from '../hooks/useTodo';

// ReactNode
// https://maku.blog/p/xenv4bh/
type Props = {
  children: ReactNode;
};

// {} = カスタムフックから取り出したオブジェクトがProviderに入ってくるから
const TodoContext = createContext({});

// children: https://choippo.com/react-component-children/
// useTodoからstateとpropsを取り出す
/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  // Context.Provider で配下コンポーネントにContextを提供する
  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoContext);
