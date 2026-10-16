import fs from "fs";
import { ThemePicker } from "vitepress-bigbang";

type TTheme = {
  primary: Parameters<typeof ThemePicker.setPrimary>[0];
  surface: Parameters<typeof ThemePicker.setSurface>[0];
}

export function computeIndexMd(theme: TTheme) {
  const fileToWritePath = "./index.md";
  const fileContent = `---
# https://vitepress.dev/reference/default-theme-home-page
---

<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'
import { sidebar } from "./.vitepress/generated/sidebar";
import { ThemePicker } from "vitepress-bigbang";

onMounted(() => {
  ThemePicker.setPrimary("${theme.primary}");
  ThemePicker.setSurface("${theme.surface}");
  const router = useRouter()
  router.go(withBase(sidebar[0].link.replace('.md', '')))
})
</script>
`
  fs.writeFileSync(fileToWritePath, fileContent);
  console.log("✅ Index.md computed");
}
