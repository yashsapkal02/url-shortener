import dbConnect from "../lib/mongodb";
import Url from "../models/Url";

export async function getServerSideProps(context) {
  const { code } = context.params;

  try {
    await dbConnect();

    const url = await Url.findOneAndUpdate(
      { shortCode: code },
      { $inc: { clicks: 1 } },
      { new: true }
    );

    if (!url) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        destination: url.longUrl,
        permanent: false,
      },
    };
  } catch (error) {
    console.error("Redirect error:", error);
    return {
      notFound: true,
    };
  }
}

export default function RedirectPage() {
  return <p>Redirecting...</p>;
}
