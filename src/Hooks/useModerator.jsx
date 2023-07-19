import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useModerator = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isModerator, isLoading: isModeratorLoading, refetch} = useQuery({
        queryKey: ['isModerator', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/moderator/${user?.email}`);
            return res.data.moderator;
        }
    })
    return [isModerator, isModeratorLoading, refetch]
}
export default useModerator;