import SignUpForm from "./_components/SignUpForm/SignUpForm";

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-left text-sm text-gray-600">
            이메일로 회원가입
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
