"use client";

import { useEffect } from "react";

export default function useScrollTop(): void {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
