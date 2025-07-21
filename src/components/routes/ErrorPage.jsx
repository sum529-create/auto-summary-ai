import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl mb-4">앗! 에러가 발생했어요 😵‍💫</h1>
      <p className="mb-6 text-gray-300">{error?.message || "알 수 없는 오류가 발생했습니다."}</p>
      <Button
        onClick={() => navigate("/")}
      >
        홈으로 돌아가기
      </Button>
    </div>
  );
};

export default ErrorPage;
