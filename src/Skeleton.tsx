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
  bgColor?: keyof typeof THEME;
  rippleColor?: keyof typeof THEME;
}

export default function Skeleton(props: SkeletonProps) {
  return <StyledSkeleton {...props} />;
}
