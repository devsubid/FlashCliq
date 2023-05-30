import TradeSkeleton from "@/components/skeleton/TradeSkeleton";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";

const Trade = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies();
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      let userID = sessionStorage?.getItem("selectedBroker");
      if (!userID) {
        toast.error("Please select a broker first");
        router.push("/broker-list");
        return;
      }
      const payload =
        "jData=" +
        JSON.stringify({
          uid: userID,
          actid: userID,
        }) +
        "&jKey=" +
        cookies?.[userID!];
      console.log(
        axios.post(
          "https://api.shoonya.com/NorenWClientTP/PositionBook/",
          payload
        )
      );
      setToken(cookies?.[userID]);
      setLoading(false);
    }
  }, [cookies, cookies.userID, router, token]);
  if (loading) {
    return <TradeSkeleton />;
  }
  return (
    <h1>
      {sessionStorage?.getItem("selectedBroker")
        ? `User: ${sessionStorage?.getItem("selectedBroker")}`
        : "No user found"}
    </h1>
  );
};

export default Trade;

Trade.getLayout = function pageLayout(page: ReactElement) {
  return <>{page}</>;
};
