"use client"

import dynamic from 'next/dynamic'

const VeltComments = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltComments })),
  {
    ssr: false,
    loading: () => null
  }
)

const VeltCommentsSidebar = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltCommentsSidebar })),
  {
    ssr: false,
    loading: () => null
  }
)

const VeltSidebarButton = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltSidebarButton })),
  {
    ssr: false,
    loading: () => null
  }
)

const VeltCommentTool = dynamic(
  () => import('@veltdev/react').then(mod => ({ default: mod.VeltCommentTool })),
  {
    ssr: false,
    loading: () => null
  }
);

const VeltInlineCommentsSection = dynamic(
  () =>
    import("@veltdev/react").then((mod) => ({ default: mod.VeltInlineCommentsSection })),
  {
    ssr: false,
    loading: () => null,
  }
);

export {
  VeltComments as DynamicVeltComments,
  VeltCommentsSidebar as DynamicVeltCommentsSidebar,
  VeltSidebarButton as DynamicVeltSidebarButton,
  VeltCommentTool as DynamicVeltCommentTool,
  VeltInlineCommentsSection as DynamicVeltInlineCommentsSection,
};
