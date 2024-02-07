import LogInForm from "./_components/LogInForm/LogInForm";

function LogInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            로그인
          </h2>
          <p className="mt-2 text-left text-sm text-gray-600">
            아이디로 로그인
          </p>
        </div>
        <LogInForm />
      </div>
    </div>
  );
}

export default LogInPage;
