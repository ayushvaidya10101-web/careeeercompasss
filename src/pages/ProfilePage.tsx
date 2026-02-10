import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, Mail, CalendarDays } from "lucide-react";
import { format } from "date-fns";

interface ExplorationItem {
  id: string;
  item_id: string;
  item_type: string;
  viewed_at: string;
}

const ProfilePage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/");
    }
  }, [loading, isAuthenticated, navigate]);

  const { data: history, isLoading: historyLoading } = useQuery({
    queryKey: ["exploration-history", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("exploration_history")
        .select("*")
        .order("viewed_at", { ascending: false });
      if (error) throw error;
      return data as ExplorationItem[];
    },
    enabled: !!user,
  });

  const { data: savedCareers } = useQuery({
    queryKey: ["saved-careers", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("saved_careers")
        .select("*")
        .order("saved_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  if (loading) return null;

  const username = user?.email?.split("@")[0] ?? "User";
  const joinDate = user?.created_at
    ? format(new Date(user.created_at), "MMMM yyyy")
    : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-2xl font-bold text-white shrink-0">
              {username.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                {username}
              </h1>
              <div className="flex flex-wrap gap-4 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" />
                  {user?.email}
                </span>
                {joinDate && (
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Joined {joinDate}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <Card variant="career">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold gradient-text">
                  {history?.length ?? 0}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Careers Explored
                </div>
              </CardContent>
            </Card>
            <Card variant="career">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold gradient-text">
                  {savedCareers?.length ?? 0}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Careers Saved
                </div>
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            Exploration History
          </h2>

          {historyLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-16 rounded-xl bg-muted animate-pulse"
                />
              ))}
            </div>
          ) : history && history.length > 0 ? (
            <div className="space-y-3">
              {history.map((item) => (
                <Card
                  key={item.id}
                  variant="career"
                  className="cursor-pointer"
                  onClick={() => {
                    if (item.item_type === "career") {
                      navigate(`/career/${item.item_id}`);
                    }
                  }}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground capitalize">
                        {item.item_id.replace(/-/g, " ")}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {item.item_type}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {format(new Date(item.viewed_at), "MMM d, yyyy")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card variant="outline">
              <CardContent className="p-8 text-center text-muted-foreground">
                <User className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p>No exploration history yet.</p>
                <p className="text-sm mt-1">
                  Start exploring careers to build your history!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
