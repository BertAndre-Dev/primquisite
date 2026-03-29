"use client";

import { useState } from "react";

export function useImageLoad() {
  const [loaded, setLoaded] = useState(false);

  return {
    loaded,
    markLoaded: () => setLoaded(true),
  };
}
