(() => {

    //Le puedo decir a las funciones que tipo de dato deben devolver
    const hero: string = 'flash';
    
    function returnName():string {
        return hero;
    }

    const turnOnLights = (): string => {
        return 'Activar batiseñal';
    }
    console.log(typeof turnOnLights);

    // ** Parametros obligatorios en las funciones ** 
    const fullName = (firstName: string, lastName: string) =>{
        return `${firstName} ${lastName}`
    }

    let heroName = fullName( 'Tony', 'Stark' );
    console.log(heroName);
;

    // ** Parametros opcionales en las funciones ** 
    const fullHeroName = (firstName: string, lastName?: string) =>{
        return `${firstName} ${lastName || 'no lastname'}`

        //el ? el final del parametro lo hace opcional
        //Los parametros opcionales siempre van de últimas
        //El pipe ayuda en caso de que no tenga parámetro: ${lastName || 'no lastname'}`
    }

    let hero2Name = fullHeroName( 'Hulk' );
    console.log(hero2Name); //Hulk no lastname

    // ** Parametros por defecto ** 
    const optionHeroName = (firstName: string, lastName?: string, upper: boolean = false) =>{
        
        if(upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else{
            return `${firstName} ${lastName || '----'}`;
        }

        //
    }

    let hero3Name = optionHeroName( 'Thor', 'Odinson', true ); 
    console.log(hero3Name); //THOR ODINSON
    let hero4Name = optionHeroName( 'Thor', 'Odinson' ); //Si no va el 3er poarametro el false por defecto
    console.log(hero3Name); //Thor Odinson




})()