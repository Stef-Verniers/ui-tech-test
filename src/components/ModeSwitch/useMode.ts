import { useSearchParams } from "react-router-dom"
type Mode = "preview" | "edit"

export default function useMode() {

    const [searchParams, setSearchParams] = useSearchParams();

    let mode = searchParams.get('mode')

    // Als mode niet in de url zit zal de default preview zijn
    if (!mode) {
        mode = "preview"
    }

    // We maken een reducer dat switcht tussen edit en preview
    const reducer = (state: any, action:any) => {
        switch (action) {
          case "setMode":
            return state === "preview" ? "edit" : "preview";
          default:
            return state;
        }
    };

    // We returnen de hudige mode en we zorgen ervoor dat de state geupdated kan worden
    return [mode, () => {
        const newMode = mode === "preview" ? "edit" : "preview";
        setSearchParams({ mode: newMode });
      }];
    }