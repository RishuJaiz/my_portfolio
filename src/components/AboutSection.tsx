import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "./SectionHeader";
import { Database, Brain, ChartPie, TrendingUp, BarChart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { 
      icon: <Database className="h-6 w-6 text-neon-orange" />, 
      text: "Built a big data pipeline using PySpark, Kafka, and Cassandra" 
    },
    { 
      icon: <BarChart className="h-6 w-6 text-neon-orange" />, 
      text: "Created sentiment analysis tools using social media data" 
    },
    { 
      icon: <Brain className="h-6 w-6 text-neon-pink" />, 
      text: "Developed transformer-based NLP models for mental health insights" 
    },
    { 
      icon: <Lightbulb className="h-6 w-6 text-neon-pink" />, 
      text: "Won 3rd place at AI Arena Hackathon for an emotion-aware music system" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          delay: 4,
          repeat: Infinity,
        }}
      />
      
      <div className="container relative z-10">
        <SectionHeader 
          title="About Me"
          subtitle="My journey through AI, ML, and Big Data"
        />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold">
              I'm a <span className="text-purple">Data Science & AI Enthusiast</span> with a passion for real-world impact.
            </h3>
            
            <div className="text-muted-foreground space-y-4">
              <p>
                Currently pursuing B.Tech in Computer Science and Engineering, I focus on solving meaningful problems 
                using machine learning, deep learning, and natural language processing. I’ve built systems that interpret human emotions, detect depression from social media text, and optimize content through data insights.
              </p>
              
              <p>
                My hands-on experience ranges from building real-time data pipelines with PySpark and Kafka 
                to training transformer-based models for mental health analysis. I enjoy integrating academic 
                research with practical applications to create solutions that matter.
              </p>
              
              <p>
                Outside of coding, I love diving into open-source projects, reading AI research, 
                and collaborating with peers on impactful tech initiatives. 
              </p>
            </div>
            
            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold mb-4">Fun Facts</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-md bg-muted/40 border border-border/50 hover:shadow-lg hover:shadow-purple/10 transition-all"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
                      scale: 1.02
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {fact.icon}
                    <span className="text-sm">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:pl-10 order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <motion.div 
                className="aspect-square rounded-3xl overflow-hidden border-4 border-purple shadow-xl relative"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 10 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-blue/10 mix-blend-overlay"></div>
                
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(45deg, rgba(139, 92, 246, 0.3) 0%, rgba(30, 174, 219, 0.3) 100%)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                
                <img 
                  src="https://avatars.githubusercontent.com/u/132575289?v=4" 
                  alt="Rishu Profile" 
                  className="w-full h-full object-cover"
                />
                
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <motion.circle cx="20" cy="30" r="1.5" fill="#8B5CF6" 
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle cx="70" cy="40" r="1.5" fill="#8B5CF6" 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle cx="50" cy="75" r="1.5" fill="#8B5CF6" 
                    animate={{ opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  />
                  <motion.path d="M20,30 L70,40" stroke="#8B5CF6" strokeWidth="0.3" opacity="0.6"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.path d="M70,40 L50,75" stroke="#8B5CF6" strokeWidth="0.3" opacity="0.6"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.path d="M50,75 L20,30" stroke="#8B5CF6" strokeWidth="0.3" opacity="0.6"
                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-background rounded-full p-4 shadow-lg border border-border"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <Card className="bg-gradient-to-br from-purple to-neon-pink text-white">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium">Projects</p>
                      <p className="text-2xl font-bold">10+</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -left-5 bg-background rounded-full p-4 shadow-lg border border-border"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <Card className="bg-gradient-to-br from-purple to-neon-pink text-white">
                  <CardContent className="p-4">
                    <div className="text-center flex flex-col items-center">
                      <p className="text-sm font-medium">Hackathons</p>
                      <p className="text-2xl font-bold">Top 3 Finish</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
