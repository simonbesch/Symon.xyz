import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import ErrorPage from "./error-page";
import Error from "./components/Error";
import Home from "./pages/Home";
import Parkour from "./pages/Parkour";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import WhoIam from "./pages/WhoIam";
import About from "./pages/About";
import ProjetsDetails from "./pages/ProjetsDetails";
import AdminSkillsEdit from "./pages/AdminPages/AdminSkillsEdit";
import AdminSkillsAdd from "./pages/AdminPages/AdminSkillsAdd";
import AdminParkourEdit from "./pages/AdminPages/AdminParkourEdit";
import AdminParkourAdd from "./pages/AdminPages/AdminParkourAdd";
import AdminProjetsEdit from "./pages/AdminPages/AdminProjetsEdit";
import AdminProjetsAdd from "./pages/AdminPages/AdminProjetsAdd";
import EditMdp from "./pages/AdminPages/EditMdp";
import EditMail from "./pages/AdminPages/EditMail";
import EditInfos from "./pages/AdminPages/EditInfos";
import "./styles/Global.scss";
import { AdminProvider } from "./contexts/AdminContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import Cookies from "js-cookie";
import axios from "axios";

const withAuth =
  (Func) =>
  async (Args = {}) => {
    const authData = Cookies.get("authData");
    if (!authData) {
      throw new Response("Unauthorized", { status: 401 });
    }
    // eslint-disable-next-line no-return-await
    return await Func(Args, authData);
  };

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: async ({}) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
        action: async ({ request }) => {
          const formData = await request.formData();
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/auth`,
            {
              email: formData.get("email"),
              password: formData.get("password"),
            },
            {
              withCredentials: true,
            }
          );
          return redirect(`/`);
        },
      },
      {
        path: "/editmdp",
        element: <EditMdp />,
        errorElement: <Error />,
        action: withAuth(async ({ request }, auth) => {
          const formData = await request.formData();
          await axios.put(
            `${import.meta.env.VITE_API_URL}/api/auth`,
            {
              action: "editmdp",
              email: formData.get("email"),
              ancienmdp: formData.get("ancienmdp"),
              nouveaumdp: formData.get("nouveaumdp"),
              nouveaumdpconf: formData.get("nouveaumdpconf"),
            },
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return redirect(`/`);
        }),
      },
      {
        path: "/editmail",
        element: <EditMail />,
        errorElement: <Error />,
        action: withAuth(async ({ request }, auth) => {
          const formData = await request.formData();
          await axios.put(
            `${import.meta.env.VITE_API_URL}/api/auth`,
            {
              action: "editmail",
              email: formData.get("email"),
              nouveaumail: formData.get("nouveaumail"),
              confmail: formData.get("confmail"),
              mdp: formData.get("mdp"),
            },
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return redirect(`/`);
        }),
      },
      {
        path: "/parkour",
        element: <Parkour />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/parkour`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/parkour/:id",
        element: <AdminParkourEdit />,
        errorElement: <ErrorPage />,
        loader: withAuth(async ({ params }, auth) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/parkour/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return response.data;
        }),
        action: withAuth(async ({ request, params }, auth) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/api/parkour/${params.id}`,
                {
                  date: formData.get("date"),
                  lieu: formData.get("lieu"),
                  poste: formData.get("poste"),
                  structure: formData.get("structure"),
                  type: formData.get("type"),
                  actuel: formData.get("actuel"),
                  description: formData.get("description"),
                },
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/parkour`);
            }

            case "delete": {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/parkour/${params.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/parkour`);
            }

            default:
              throw new Response("", { status: 405 });
          }
        }),
      },
      {
        path: "/parkour/add",
        element: <AdminParkourAdd />,
        errorElement: <ErrorPage />,
        action: withAuth(async ({ request }, auth) => {
          const formData = await request.formData();
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/parkour`,
            {
              date: formData.get("date"),
              lieu: formData.get("lieu"),
              poste: formData.get("poste"),
              structure: formData.get("structure"),
              type: formData.get("type"),
              actuel: formData.get("actuel"),
              description: formData.get("description"),
            },
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return redirect(`/parkour`);
        }),
      },
      {
        path: "/skills",
        element: <Skills />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/skills`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/skills/:id",
        element: <AdminSkillsEdit />,
        errorElement: <ErrorPage />,
        loader: withAuth(async ({ params }, auth) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/skills/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return response.data;
        }),
        action: withAuth(async ({ request, params }, auth) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/api/skills/${params.id}`,
                {
                  name: formData.get("name"),
                  level: formData.get("level"),
                  levelCSS: formData.get("levelCSS"),
                  description: formData.get("description"),
                  category: formData.get("category"),
                  icon: formData.get("icon"),
                },
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/skills`);
            }

            case "delete": {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/skills/${params.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/skills`);
            }

            default:
              throw new Response("", { status: 405 });
          }
        }),
      },
      {
        path: "/skills/add",
        element: <AdminSkillsAdd />,
        errorElement: <ErrorPage />,
        action: withAuth(async ({ request }, auth) => {
          const formData = await request.formData();
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/skills`,
            {
              name: formData.get("name"),
              level: formData.get("level"),
              levelCSS: formData.get("levelCSS"),
              description: formData.get("description"),
              category: formData.get("category"),
              icon: formData.get("icon"),
            },
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return redirect(`/skills`);
        }),
      },
      {
        path: "/projets",
        element: <Projets />,
        errorElement: <ErrorPage />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/projets`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/projets/:id",
        element: <AdminProjetsEdit />,
        errorElement: <ErrorPage />,
        loader: withAuth(async ({ params }, auth) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/projets/${params.id}`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        }),
        action: withAuth(async ({ request, params }, auth) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/api/projets/${params.id}`,
                {
                  title: formData.get("title"),
                  description1: formData.get("description1"),
                  description2: formData.get("description2"),
                  description3: formData.get("description3"),
                  mates: formData.get("mates"),
                  github: formData.get("github"),
                  online: formData.get("online"),
                  lien: formData.get("lien"),
                  category: formData.get("category"),
                  img1: formData.get("img1"),
                  img2: formData.get("img2"),
                  img3: formData.get("img3"),
                  img4: formData.get("img4"),
                  img5: formData.get("img5"),
                  img6: formData.get("img6"),
                  img7: formData.get("img7"),
                  img8: formData.get("img8"),
                  img9: formData.get("img9"),
                  img10: formData.get("img10"),
                },
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/projets/details/${params.id}`);
            }

            case "delete": {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/projets/${params.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );

              return redirect(`/projets`);
            }

            default:
              throw new Response("", { status: 405 });
          }
        }),
      },
      {
        path: "/projets/add",
        element: <AdminProjetsAdd />,
        errorElement: <ErrorPage />,
        action: withAuth(async ({ request }, auth) => {
          const formData = await request.formData();
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/projets`,
            {
              title: formData.get("title"),
              description1: formData.get("description1"),
              description2: formData.get("description2"),
              description3: formData.get("description3"),
              mates: formData.get("mates"),
              github: formData.get("github"),
              online: formData.get("online"),
              lien: formData.get("lien"),
              category: formData.get("category"),
              img1: formData.get("img1"),
              img2: formData.get("img2"),
              img3: formData.get("img3"),
              img4: formData.get("img4"),
              img5: formData.get("img5"),
              img6: formData.get("img6"),
              img7: formData.get("img7"),
              img8: formData.get("img8"),
              img9: formData.get("img9"),
              img10: formData.get("img10"),
            },
            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
              withCredentials: true,
            }
          );
          return redirect(`/projets`);
        }),
      },
      {
        path: "/projets/details/:id",
        element: <ProjetsDetails />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/projets/${params.id}`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/editInfos",
        element: <EditInfos />,
        errorElement: <ErrorPage />,
        loader: async ({}) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
        action: withAuth(async ({ request, params }, auth) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await axios.put(
                `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
                {
                  dispo: formData.get("dispo"),
                  mail: formData.get("mail"),
                  lnk: formData.get("lnk"),
                  github: formData.get("github"),
                  insta: formData.get("insta"),
                  about: formData.get("about"),
                  info1: formData.get("info1"),
                  info2: formData.get("info2"),
                  info3: formData.get("info3"),
                  info4: formData.get("info4"),
                  info5: formData.get("info5"),
                },
                {
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                  withCredentials: true,
                }
              );
              return redirect(`/`);
            }
          }
        }),
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
        loader: async ({}) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "/whoiam",
        element: <WhoIam />,
        errorElement: <ErrorPage />,
        loader: async ({}) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/allInfos/1`,
            {
              withCredentials: true,
            }
          );
          return response.data;
        },
      },
      {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AdminProvider>
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  </AdminProvider>
);
