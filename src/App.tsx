import { RouterProvider } from "react-router";
import router from "./routes";
import { ReactQueryProvider } from "providers/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ReactQueryProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </>
  );
}

export default App;
