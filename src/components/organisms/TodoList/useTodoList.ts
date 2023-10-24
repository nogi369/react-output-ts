import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { NAVIGATION_PATH } from '../../../constants/navigation';

// actionsの型定義
type ActionType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

export const useTodoList = () => {
  const navigate = useNavigate();

  // 詳細ページに遷移する処理
  const handleMoveDetailPage = useCallback((id: number) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`), [navigate]);

  // 編集ページに遷移する処理
  const handleMoveEditPage = useCallback((id: number) => navigate(`${NAVIGATION_PATH.EDIT}${id}`), [navigate]);

  // 型定義なし => あり
  const actions: ActionType = { handleMoveDetailPage, handleMoveEditPage };

  // 「as const」 (const assertion) => オブジェクトを読み取り専用にする
  return [actions] as const;
};
