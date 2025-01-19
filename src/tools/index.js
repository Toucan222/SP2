import ExampleTool from './ExampleTool';
import LLMDemoTool from './LLMDemoTool';

export const tools = [
  {
    id: 1,
    title: "Example Tool",
    description: "This is a sample tool to demonstrate the multi-tool system.",
    component: ExampleTool
  },
  {
    id: 2,
    title: "LLM Demo",
    description: "Test the Deepseeks LLM API with custom prompts",
    component: LLMDemoTool
  }
];
