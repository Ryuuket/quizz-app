export interface JwtPayload {
    sub: string; // Subject (typically the user's ID)
    username: string; // Username or email of the user
    roles: string[]; // Array of roles assigned to the user
    exp?: number; // Expiration time of the token (UNIX timestamp)
    iat?: number; // Issued at time of the token (UNIX timestamp)
    iss?: string; // Issuer of the token
    aud?: string; // Audience for the token
    
  }
  