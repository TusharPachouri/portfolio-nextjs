'use client'
import React, { useEffect } from 'react';

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    // Add Chatwoot Settings
    // (window as any).chatwootSettings = {
    //   hideMessageBubble: false,
    //   position: 'right', // This can be left or right
    //   locale: 'en', // Language to be set
    //   type: 'standard', // [standard, expanded_bubble]
    // };

    // Paste the script from inbox settings except the <script> tag
    (function (d: Document, t: string) {
      const BASE_URL = "https://app.chatwoot.com";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];
      g.src = `${BASE_URL}/packs/js/sdk.js`;
      g.defer = true;
      g.async = true;
      s.parentNode?.insertBefore(g, s);
      g.onload = () => {
        (window as any).chatwootSDK.run({
          websiteToken: 'YrtMnzfKxwwSpWLRRjY7fFHz' ,
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);
  return null;
};

export default ChatwootWidget;
