import { useEffect, useState } from "react";
import { cmsBaseUrl } from "constants";

const token =
  "be86b71104d6f7383373e779ca96d67cab5702cda84b0d1ebaae713a685b51cbd6f0fb1e32748756a6e83f9ce1759e99ed5dc88141fb17629c49e964b518b11f16d1cb503f6163f28539b526d695f5b21885b3f85a48b8d39b1b069da27a0e1f13cfc948060b088a710c5b4c2d247a3edb76dab26f2891574912809b9a5c703a";

export const useGetContent = (path) => {
  const [data, setData] = useState();

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `${cmsBaseUrl}/api${path}`;
        const response = await fetch(url, {
          headers,
        });
        const json = await response.json();

        setData(json.data.attributes);
      } catch (error) {
        console.error("Could not get data from CMS");
      }
    };

    void getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return data || {};
};
