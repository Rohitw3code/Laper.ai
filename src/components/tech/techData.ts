import { Database, Cloud, Brain, GitBranch, MessageSquare, Shield, Terminal, CircuitBoard, Workflow, Bot } from 'lucide-react';

export const techCategories = [
  {
    icon: Brain,
    title: "Generative AI",
    description: "State-of-the-art large language models and AI solutions",
    technologies: ["GPT-4", "Claude 2", "Stable Diffusion", "DALL-E 3"]
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent process automation and bot development",
    technologies: ["Teams Bot SDK", "Power Automate", "Selenium", "UiPath"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Modern data pipeline and warehouse solutions",
    technologies: ["Snowflake", "dbt", "Airflow", "Azure Synapse"]
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    description: "Enterprise ML infrastructure and deployment",
    technologies: ["Azure ML", "AWS SageMaker", "Kubernetes", "MLflow"]
  },
  {
    icon: Workflow,
    title: "Automation Suite",
    description: "End-to-end process automation solutions",
    technologies: ["Playwright", "Selenium", "PyAutoGUI", "Power Automate"]
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Advanced chatbots and virtual assistants",
    technologies: ["Teams Bot Framework", "Rasa", "LangChain", "DialogFlow"]
  },
  {
    icon: CircuitBoard,
    title: "AI Integration",
    description: "Seamless AI integration with existing systems",
    technologies: ["REST APIs", "GraphQL", "WebSockets", "gRPC"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Secure and compliant AI implementations",
    technologies: ["Azure Security", "AWS GuardDuty", "AI Shield", "Secure MLOps"]
  }
];