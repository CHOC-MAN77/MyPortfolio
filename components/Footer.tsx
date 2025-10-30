"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground/60 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> by Athanase Ngaiporo
        </p>
        <p className="text-foreground/40 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
