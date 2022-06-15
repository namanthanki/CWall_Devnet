use anchor_lang::error_code;

#[error_code]
pub enum WallErrors {

    #[msg("The Wall Title length should be less than 21 characters and cannot be an empty string")]
    WallTitleLengthError,

    #[msg("The Wall Description length should be less than 100 characters and cannot be an empty string")]
    WallDescLengthError,

    #[msg("The Wall Art link length should be less than 80 characters and cannot be an empty string")]
    WallArtLinkLengthError,

    #[msg("You don't have the authority to change this wall's content")]
    WallAuthorityError,
    
}
