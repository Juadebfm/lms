import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <span className="h-8 w-8">
            <img src="/jdlogo.png" alt="" className="w-full h-full" />
          </span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">signin</TabsContent>
          <TabsContent value="signup">signup</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
