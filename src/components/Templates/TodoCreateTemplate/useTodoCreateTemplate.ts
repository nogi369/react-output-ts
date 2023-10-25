import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { EventType } from '../../../interfaces/Event';

// paramsの型定義
type Param = {
  addTodo: (title: string, content: string) => void;
};

// statesの型定義
type StatesType = {
  inputTitle: string;
  inputContent: string;
};

// actionsの型定義
type ActionsType = {
  handleChangeTitle: EventType['onChangeInput'];
  handleChangeContent: EventType['onChangeTextArea'];
  handleCreateTodo: EventType['onSubmit'];
};

export const useTodoCreateTemplate = ({ addTodo }: Param) => {
  const navigate = useNavigate();
  // local state
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  // タイトル変更処理
  const handleChangeTitle = useCallback((e) => setInputTitle(e.target.value), []);
  // コンテンツ変更処理
  const handleChangeContent = useCallback((e) => setInputContent(e.target.value), []);
  // 新規登録実行処理
  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== '' && inputContent !== '') {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const states: StatesType = {
    inputTitle,
    inputContent,
  };

  const actions: ActionsType = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [states, actions] as const;
};
