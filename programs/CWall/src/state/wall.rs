use anchor_lang::prelude::*;
use crate::errors::WallErrors;

#[account]
pub struct Wall {
    pub authority: Pubkey, // 32
    pub title : String, // 21 chars * 4 = 84
    pub description : String, // 100 chars * 4 = 400
    pub art_1 : String, // 80 chars * 4 = 320
    pub art_2 : String, // 80 chars * 4 = 320
    pub art_3 : String, // 80 chars * 4 = 320
    pub art_4 : String, // 80 chars * 4 = 320
    pub art_5 : String, // 80 chars * 4 = 320
}

const DISCRIMINATOR_LENGTH: usize = 8;
const PUBLIC_KEY_LENGTH: usize = 32;
const STRING_LENGTH_PREFIX: usize = 4;
const MAX_TITLE : usize = 21 * 4;
const MAX_DESCRIPTION : usize = 100 * 4;
const MAX_ART : usize = 80 * 4;

impl Wall {
    pub const LEN : usize = DISCRIMINATOR_LENGTH
        + PUBLIC_KEY_LENGTH
        + STRING_LENGTH_PREFIX + MAX_TITLE
        + STRING_LENGTH_PREFIX + MAX_DESCRIPTION
        + (5 * (STRING_LENGTH_PREFIX + MAX_ART));

    pub fn get_authority(&self) -> Pubkey {
        self.authority
    }

    pub fn change_title(&mut self, new_title : String) -> Result<()>{
        if new_title.len() == 0 as usize || new_title.len() > 21 as usize {
            return Err(error!(WallErrors::WallTitleLengthError));
        }
        self.title = new_title;
        Ok(())
    }
    pub fn change_description(&mut self, new_description : String) -> Result<()>{
        if new_description.len() == 0 as usize || new_description.len() > 100 as usize {
            return Err(error!(WallErrors::WallDescLengthError));
        }
        self.description = new_description;
        Ok(())
    }
    pub fn change_art1(&mut self, new_art1 : String) -> Result<()>{
        if new_art1.len() == 0 as usize || new_art1.len() > 80 as usize {
            return Err(error!(WallErrors::WallArtLinkLengthError));
        }
        self.art_1 = new_art1;
        Ok(())
    }
    pub fn change_art2(&mut self, new_art2 : String) -> Result<()>{
        if new_art2.len() == 0 as usize || new_art2.len() > 80 as usize {
            return Err(error!(WallErrors::WallArtLinkLengthError));
        }
        self.art_2 = new_art2;
        Ok(())
    }
    pub fn change_art3(&mut self, new_art3 : String) -> Result<()>{
        if new_art3.len() == 0 as usize || new_art3.len() > 80 as usize {
            return Err(error!(WallErrors::WallArtLinkLengthError));
        }
        self.art_3 = new_art3;
        Ok(())
    }
    pub fn change_art4(&mut self, new_art4 : String) -> Result<()>{
        if new_art4.len() == 0 as usize || new_art4.len() > 80 as usize {
            return Err(error!(WallErrors::WallArtLinkLengthError));
        }
        self.art_4 = new_art4;
        Ok(())
    }
    pub fn change_art5(&mut self, new_art5 : String) -> Result<()>{
        if new_art5.len() == 0 as usize || new_art5.len() > 80 as usize {
            return Err(error!(WallErrors::WallArtLinkLengthError));
        }
        self.art_5 = new_art5;
        Ok(())
    }
    pub fn transfer_auth(&mut self, new_auth : Pubkey) -> Result<()>{
        self.authority = new_auth;
        Ok(())
    }
}