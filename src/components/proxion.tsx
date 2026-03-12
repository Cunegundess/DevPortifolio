import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

function Proxion() {
  // const containerVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };
  //
  // const itemVariants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-2xl shadow-lg p-6 md:p-8 border border-border bg-gradient-to-br from-secondary to-card dark:from-card/50 dark:to-background hover:shadow-xl transition-all duration-300 overflow-hidden relative">
        {/* Decorative gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent dark:from-accent/5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        
        <div className="relative z-10">
          <CardHeader className="pb-4 px-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
              <CardTitle className="text-primary dark:text-primary-foreground text-2xl font-bold">
                Software Engineer
              </CardTitle>
            </div>
            <a
              href="https://proxion.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-block mb-3"
            >
              Proxion Solutions
            </a>
            <CardDescription className="text-foreground/70 dark:text-foreground/80 text-base font-medium">
              Dez 2024 - Presente
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-primary dark:text-primary-foreground pb-6 px-0">
            <div className="space-y-3">
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  Desenvolvimento backend com Kotlin/Java e Spring Boot
                </p>
              </li>
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  Projetando e implementando APIs REST escaláveis
                </p>
              </li>
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  Colaborando com times multifuncionais
                </p>
              </li>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-2 pt-4 px-0 justify-start">
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Kotlin
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Java
            </Badge>
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Spring Boot
            </Badge>
            <Badge className="bg-gradient-to-r from-accent to-accent/70 hover:from-accent/90 hover:to-accent text-accent-foreground border-0 shadow-md hover:shadow-lg transition-all">
              REST APIs
            </Badge>
            <Badge className="bg-gradient-to-r from-accent/80 to-accent/60 hover:from-accent/90 hover:to-accent/75 text-accent-foreground border-0 shadow-md hover:shadow-lg transition-all">
              PostgreSQL
            </Badge>
            <Badge className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground border-0 shadow-md hover:shadow-lg transition-all">
              Docker
            </Badge>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}

export default Proxion;
