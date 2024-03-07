import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = (props) => (
  <>
    <ContentLoader
      speed={2}
      width={384}
      height={220}
      viewBox="0 0 384 160"
      backgroundColor="#334155"
      foregroundColor="#F8719D"
      {...props}
    >
      <rect x="0" y="29" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="2" y="13" rx="0" ry="0" width="71" height="7" />
      <rect x="4" y="141" rx="0" ry="0" width="63" height="6" />
      <rect x="302" y="141" rx="0" ry="0" width="71" height="6" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={384}
      height={220}
      viewBox="0 0 384 160"
      backgroundColor="#334155"
      foregroundColor="#F8719D"
      {...props}
    >
      <rect x="0" y="29" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="2" y="13" rx="0" ry="0" width="71" height="7" />
      <rect x="4" y="141" rx="0" ry="0" width="63" height="6" />
      <rect x="302" y="141" rx="0" ry="0" width="71" height="6" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={384}
      height={220}
      viewBox="0 0 384 160"
      backgroundColor="#334155"
      foregroundColor="#F8719D"
      {...props}
    >
      <rect x="0" y="29" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="2" y="13" rx="0" ry="0" width="71" height="7" />
      <rect x="4" y="141" rx="0" ry="0" width="63" height="6" />
      <rect x="302" y="141" rx="0" ry="0" width="71" height="6" />
    </ContentLoader>
  </>
);

export default SkeletonCard;
