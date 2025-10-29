import { FC } from "react";
import { Icon } from "@iconify-icon/react";

type PageLoaderProps = {
  height?: number;
};
const PageLoader: FC<PageLoaderProps> = ({ height = 30 }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Icon
        icon="svg-spinners:6-dots-scale"
        className="text-main"
        height={height}
      />
    </div>
  );
};

export default PageLoader;
