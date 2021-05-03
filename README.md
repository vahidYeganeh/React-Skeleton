# react-skeleton
Reusable skeleton component for react js (with styled-components)

```ts
import React from 'react';
import { StyledSkeleton } from './SkeletonStyle';
import { THEME } from 'path-of-styled-components-theme-goes-here';

interface SkeletonProps {
  width?: string;
  height: string;
  rippleWidth?: string;
  rippleHeight?: string;
  className?: string;
  hasRipple?: boolean;
  bgColor?: keyof typeof THEME; //styled-components theme
  rippleColor?: keyof typeof THEME;
}

export default function Skeleton(props: SkeletonProps) {
  return <StyledSkeleton {...props} />;
}
```

## Usage:
```ts
<Skeleton width="100px" height="100px" />
```
