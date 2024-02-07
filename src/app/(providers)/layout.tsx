import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import store from "@/lib/store/store";
import { Provider } from "react-redux";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
