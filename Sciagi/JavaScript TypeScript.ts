


/*
                             #             #
                      #      #             #
    ###    #     #         #####    ###    #              ###     ####     ###     ### 
   #       #     #   ##      #     #   #   ####          #   #        #   #       #   #
    ###    #  #  #    #      #     #       #   #         #        #####    ###    #####
       #   # # # #    #      #     #   #   #   #         #   #   #    #       #   #    
    ###     #   #    ###      ##    ###    #   #          ###     ### #    ###     ### 
*/
// switch case z typem
	const panel = { title: '', view: '', id: 0 };

    type ADefinicjaTypuAlias = 'storage' | 'session' | null;
    const warunek :ADefinicjaTypuAlias = 'storage';

	switch(warunek) {
		case 'storage': localStorage.setItem('client_panel', JSON.stringify(panel));    break;
		case 'session': sessionStorage.setItem('client_panel', JSON.stringify(panel));  break;
		default: break;
	};


