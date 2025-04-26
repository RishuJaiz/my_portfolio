
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Brain, Database, Code, Lightbulb, ChartPie, BarChart, TrendingUp, Activity } from "lucide-react";

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    "Machine Learning & AI": [
      { name: "Scikit-Learn", level: 95, color: "#F7931E", icon: <Brain className="h-5 w-5" />, desc: "Applied ML models for sentiment analysis and fraud detection" },
      { name: "NLP", level: 88, color: "#42A5F5", icon: <Brain className="h-5 w-5" />, desc: "Worked on emotion-aware music recommendation and mental health detection" },
      { name: "Transformers (BERT)", level: 85, color: "#FF6F00", icon: <Brain className="h-5 w-5" />, desc: "Used in detecting depression severity in social media text" },
      { name: "PyTorch", level: 80, color: "#EE4C2C", icon: <Brain className="h-5 w-5" />, desc: "Implemented deep learning models for classification tasks" },
    ],
    "Big Data & Engineering": [
      { name: "PySpark", level: 90, color: "#E25A1C", icon: <Database className="h-5 w-5" />, desc: "Used for credit card fraud detection and data pipelines" },
      { name: "Apache Kafka", level: 85, color: "#231F20", icon: <Database className="h-5 w-5" />, desc: "Stream processing and integration in big data projects" },
      { name: "Cassandra", level: 80, color: "#1287B1", icon: <Database className="h-5 w-5" />, desc: "NoSQL database used in real-time fraud detection system" },
      { name: "SQL", level: 90, color: "#336791", icon: <Database className="h-5 w-5" />, desc: "Relational data handling and query optimization" },
    ],
    "Visualization & Tools": [
      { name: "Microsoft Excel", level: 95, color: "#217346", icon: <BarChart className="h-5 w-5" />, desc: "Expert in formulas, pivot tables, and data visualization" },
      { name: "Matplotlib & Seaborn", level: 85, color: "#11557C", icon: <ChartPie className="h-5 w-5" />, desc: "Statistical plotting and visual storytelling" },
      { name: "Power BI", level: 80, color: "#F2C811", icon: <BarChart className="h-5 w-5" />, desc: "Interactive dashboards and data-driven insights" },
      { name: "Statistical Analysis", level: 90, color: "#20C997", icon: <Activity className="h-5 w-5" />, desc: "Used in academic research and social media sentiment evaluation" },
    ],
  };
  

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="My technical toolkit and specializations"
        />

        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-lg hover:shadow-purple/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-purple to-blue rounded-full"></span>
                {category}
              </h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                {categorySkills.map((skill, index) => (
                  <HoverCard key={skill.name}>
                    <HoverCardTrigger asChild>
                      <motion.div
                        variants={skillCardVariants}
                        whileHover={{ 
                          scale: 1.02, 
                          boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.5)",
                          y: -5 
                        }}
                        className="relative cursor-pointer"
                      >
                        <div className="flex justify-between mb-2 items-center">
                          <div className="flex items-center gap-2">
                            <span className="p-1 rounded bg-muted">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              delay: 0.2 + (categoryIndex * 0.2 + index * 0.1),
                              duration: 1,
                              ease: "easeOut",
                            }}
                            style={{ backgroundColor: skill.color }}
                            className="h-full rounded-full relative"
                          >
                            <motion.div 
                              className="absolute top-0 right-0 h-full w-full"
                              style={{
                                background: `linear-gradient(90deg, transparent, ${skill.color}88)`,
                              }}
                              animate={{
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-64 bg-card/80 backdrop-blur-md">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full" style={{ backgroundColor: skill.color }}>
                            {skill.icon}
                          </div>
                          <h4 className="font-semibold">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.desc}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl animate-pulse-glow" 
        style={{animationDelay: '1s'}}
      />
    </section>
  );
};

export default SkillsSection;
