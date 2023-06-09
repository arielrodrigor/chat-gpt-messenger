'use client'
import NewChat from "@/components/NewChat";
import {useSession, signOut} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "@/firebase";
import {collection, orderBy, query} from "@firebase/firestore";
import ChatRow from "@/components/ChatRow";
import ModelSelection from "@/components/ModelSelection";

const SideBar = () => {
    const {data: session} = useSession();
    const [chats, loading, error] = useCollection(
        session &&
        query(
            collection(db, 'users', session?.user?.email!, 'chats'),
            orderBy('createdAt', 'asc'),
        )
    )

    return (
        <div className={'p-2 flex flex-col h-screen'}>
            <div className={'flex-1'}>
                {/*New Chat*/}
                <NewChat />
                <div className={'hidden sm:inline'}>
                    <ModelSelection />

                </div>
                <div className={'flex flex-col space-y-2 my-2'}>
                    {loading &&
                             <div className="animate-pulse text-center text-white">

                                <p>Loading Chats...</p>

                            </div>
                    }
                    {/* Map through the ChatRows */}
                    {chats?.docs.map((chat) => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                </div>
            </div>
            {session && (
               <img
                   onClick={() => signOut()}
                   // @ts-ignore
                   src={session.user?.image}
                   // @ts-ignore
                   alt={session.user?.name}
                   className={'h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'}/>
            )}
        </div>
    );
};

export default SideBar;