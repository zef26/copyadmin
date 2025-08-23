import React from "react";
import { Zap, LayoutDasboard,Barchart3,Users} from "lucide-react";



const menuItems = [
  {
    id : "dashboard",
    icon : LayoutDasboard,
    label : "Dashboard",
    active : true,
    badge : "New"
  },
  {
    id: "analytics",
    icon: Barchart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },  
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label : "Users",
    count : "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "activity", label: "User Activity" },
      { id: "roles", label: "Roles & Permissions" },
    ],
  }
];

const Sidebar = () => {
  return (
    <div className="transition duration-300 ease-in-out                                dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 ">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white ">
              Nexus
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 ">
              Admin Panel
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"> </nav>
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg"
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500 "
          />
          <div className="flex-1 min-w-0">
            <div className="flex-1 mn-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Salavat Karachurin
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
