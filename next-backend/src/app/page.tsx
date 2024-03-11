import axios from "axios";


// async component - only in server components
export default async function Home() {
  // Fetch data from an external API using async
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.name}
            </div>
            
            {userDetails?.email}
        </div>
    </div>
</div>
  );
}

// In server we are not using the useState, useEffect

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data
}
