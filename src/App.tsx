import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import TopScorers from "./pages/TopScorers";
import TopScorersLearnMore from "./pages/TopScorersLearnMore";
import StudentProfile from "./pages/StudentProfile";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import CookiePolicy from "./pages/CookiePolicy";
import FAQ from "./pages/FAQ";
import PrimaryEducation from "./pages/PrimaryEducation";
import SecondaryEducation from "./pages/SecondaryEducation";
import HigherSecondary from "./pages/HigherSecondary";
import ScienceStream from "./pages/ScienceStream";
import CommerceStream from "./pages/CommerceStream";
import ArtsStream from "./pages/ArtsStream";
import OurTeachers from "./pages/OurTeachers";
import TeacherProfile from "./pages/TeacherProfile";
import AlumniNetwork from "./pages/AlumniNetwork";
import Library from "./pages/Library";
import CareerServices from "./pages/CareerServices";
import Undergraduate from "./pages/Undergraduate";
import Graduate from "./pages/Graduate";
import PhdPrograms from "./pages/PhdPrograms";
import OnlineLearning from "./pages/OnlineLearning";
import PrincipalLogin from "./pages/PrincipalLogin";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentAuth from "./pages/StudentAuth";
import StudentDashboard from "./pages/StudentDashboard";
import StudentNotifications from "./pages/StudentNotifications";
import StudentTimetable from "./pages/StudentTimetable";
import StudentQuiz from "./pages/StudentQuiz";
import StudentMyProfile from "./pages/StudentMyProfile";
import AuthLanding from "./pages/AuthLanding";
import CurriculumGuide from "./pages/CurriculumGuide";
import CookieConsentBanner from "./components/CookieConsentBanner";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateTeacherID from "./pages/CreateTeacherID";
import ManageTeacherID from "./pages/ManageTeacherID";
import ManageTeachers from "./pages/ManageTeachers";
import TeacherProfileSettings from "./pages/TeacherProfileSettings";
import StudentProfileSettings from "./pages/StudentProfileSettings";
import CoursesManagement from "./pages/CoursesManagement";
import Courses from "./pages/Courses";
import YearlyBook from "./pages/YearlyBook";
import ExamRoutine from "./pages/ExamRoutine";
import PrincipalAudioRoute from "@/components/PrincipalAudioRoute";
import LazyLoadExample from "./pages/LazyLoadExample";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <About />
          </motion.div>
        } />
        <Route path="/academics" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Academics />
          </motion.div>
        } />
        <Route path="/curriculum-guide" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CurriculumGuide />
          </motion.div>
        } />
        <Route path="/facilities" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Facilities />
          </motion.div>
        } />
        <Route path="/admissions" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Admissions />
          </motion.div>
        } />
        <Route path="/gallery" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Gallery />
          </motion.div>
        } />
        <Route path="/top-scorers" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <TopScorers />
          </motion.div>
        } />
        <Route path="/top-scorers/learn-more" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <TopScorersLearnMore />
          </motion.div>
        } />
        <Route path="/student/:studentId" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <StudentProfile />
          </motion.div>
        } />
        <Route path="/events" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Events />
          </motion.div>
        } />
        <Route path="/events/:eventId" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <EventDetail />
          </motion.div>
        } />
        <Route path="/yearly-book" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <YearlyBook />
          </motion.div>
        } />
        <Route path="/exam-routine" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <ExamRoutine />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Contact />
          </motion.div>
        } />
        <Route path="/privacy" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <PrivacyPolicy />
          </motion.div>
        } />
        <Route path="/terms" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <TermsOfService />
          </motion.div>
        } />
        <Route path="/sitemap" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Sitemap />
          </motion.div>
        } />
        <Route path="/cookies" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CookiePolicy />
          </motion.div>
        } />
        <Route path="/faq" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <FAQ />
          </motion.div>
        } />
        <Route path="/primary-education" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <PrimaryEducation />
          </motion.div>
        } />
        <Route path="/secondary-education" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <SecondaryEducation />
          </motion.div>
        } />
        <Route path="/higher-secondary" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <HigherSecondary />
          </motion.div>
        } />
        <Route path="/science-stream" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <ScienceStream />
          </motion.div>
        } />
        <Route path="/commerce-stream" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CommerceStream />
          </motion.div>
        } />
        <Route path="/arts-stream" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <ArtsStream />
          </motion.div>
        } />
        <Route path="/our-teachers" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <OurTeachers />
          </motion.div>
        } />
        <Route path="/teacher/:teacherId" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <TeacherProfile />
          </motion.div>
        } />
        <Route path="/alumni-network" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <AlumniNetwork />
          </motion.div>
        } />
        <Route path="/library" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Library />
          </motion.div>
        } />
        <Route path="/career-services" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CareerServices />
          </motion.div>
        } />
        <Route path="/undergraduate" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Undergraduate />
          </motion.div>
        } />
        <Route path="/graduate" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Graduate />
          </motion.div>
        } />
        <Route path="/phd-programs" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <PhdPrograms />
          </motion.div>
        } />
        <Route path="/online-learning" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <OnlineLearning />
          </motion.div>
        } />
        <Route path="/principal" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <PrincipalLogin />
          </motion.div>
        } />
        <Route path="/principal-dashboard" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <PrincipalDashboard />
          </motion.div>
        } />
        <Route path="/principal_dashboard" element={<Navigate to="/principal-dashboard" replace />} />
        <Route path="/teacher" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <TeacherLogin />
          </motion.div>
        } />
        <Route path="/auth" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <AuthLanding />
          </motion.div>
        } />
        <Route path="/teacher-dashboard" element={
          <ProtectedRoute
            authKey="teacherAuth"
            redirectTo="/teacher"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <TeacherDashboard />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/teacher-dashbored" element={<Navigate to="/teacher" replace />} />
        <Route path="/teacher-profile-settings" element={
          <ProtectedRoute
            authKey="teacherAuth"
            redirectTo="/teacher"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <TeacherProfileSettings />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/student-login" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <StudentAuth />
          </motion.div>
        } />
        <Route path="/student-dashboard" element={
          <ProtectedRoute
            authKey="studentAuth"
            redirectTo="/student-login"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <StudentDashboard />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/student-notifications" element={
          <ProtectedRoute
            authKey="studentAuth"
            redirectTo="/student-login"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <StudentNotifications />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/student-timetable" element={
          <ProtectedRoute
            authKey="studentAuth"
            redirectTo="/student-login"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <StudentTimetable />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/student-quiz" element={
          <ProtectedRoute requiredRole="student">
            <StudentQuiz />
          </ProtectedRoute>
        } />
        <Route path="/student-my-profile" element={
          <ProtectedRoute
            authKey="studentAuth"
            redirectTo="/student-login"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            >
              <StudentMyProfile />
            </motion.div>
          </ProtectedRoute>
        } />
        <Route path="/student-profile-settings" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <StudentProfileSettings />
          </motion.div>
        } />
        <Route path="/create-teacher-id" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CreateTeacherID />
          </motion.div>
        } />
        <Route path="/manage-teacher-id" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <ManageTeacherID />
          </motion.div>
        } />
        <Route path="/manage-teachers" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <ManageTeachers />
          </motion.div>
        } />
        <Route path="/courses" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Courses />
          </motion.div>
        } />
        <Route path="/courses-management" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <CoursesManagement />
          </motion.div>
        } />
        <Route
          path="/principal-audio"
          element={
            <PrincipalAudioRoute />
          }
        />
        <Route path="/lazy-example" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <LazyLoadExample />
          </motion.div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  // ⚡ PERFORMANCE OPTIMIZATION - Runs once on app load
  useEffect(() => {
    // 1. DNS Prefetch & Preconnect for faster loading
    const optimizeConnections = () => {
      const links = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      ];

      links.forEach(({ rel, href, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      });
    };

    // 2. Optimize images and fonts loading
    const optimizeAssets = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        /* Font optimization - swap prevents FOIT */
        * {
          font-display: swap;
        }

        /* Lazy load all images by default */
        img:not([loading]) {
          loading: lazy;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // 3. Viewport height fix for mobile devices
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 4. Prefetch important routes on idle
    const prefetchRoutes = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Prefetch commonly visited pages
          const routes = ['/about', '/admissions', '/contact'];
          routes.forEach(route => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = route;
            document.head.appendChild(link);
          });
        });
      }
    };

    // 5. Performance monitoring (optional - remove in production)
    const logPerformance = () => {
      if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in: ${pageLoadTime}ms`);
          }, 0);
        });
      }
    };

    // Run optimizations
    optimizeConnections();
    optimizeAssets();
    setViewportHeight();
    prefetchRoutes();
    logPerformance();

    // Resize listener for viewport height
    window.addEventListener('resize', setViewportHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  // Validate teacher session (existing code)
  useEffect(() => {
    try {
      const teacherAuth = localStorage.getItem("teacherAuth");
      const email = (localStorage.getItem("teacherEmail") || "").trim().toLowerCase();
      const name = (localStorage.getItem("teacherName") || "").trim().toLowerCase();

      if (teacherAuth === "true" && (email || name)) {
        const raw = localStorage.getItem("royal-academy-auth-teachers") || "[]";
        const teachers = JSON.parse(raw);

        if (teachers.length > 0) {
          const exists = (teachers || []).some((t: any) => {
            const tEmail = ((t.email || "") + "").trim().toLowerCase();
            const tName = ((t.username || t.name || "") + "").trim().toLowerCase();
            return (email && tEmail === email) || (name && tName === name);
          });

          if (!exists) {
            localStorage.removeItem("teacherAuth");
            localStorage.removeItem("teacherEmail");
            localStorage.removeItem("teacherName");
            localStorage.removeItem("teacherSubject");
          }
        }
      }
    } catch (error) {
      console.warn("Error validating teacher session, preserving authentication:", error);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true
            }}
          >
            <AnimatedRoutes />
            <CookieConsentBanner />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;