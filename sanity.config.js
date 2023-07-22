import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "pw8n7f3g",
  dataset: "production",
  title: "Hopegivers Foundation",
  apiVersion: "2023-07-19",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
