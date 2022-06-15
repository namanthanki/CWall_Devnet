use anchor_lang::prelude::*;
use instructions::*;

pub mod errors;
pub mod instructions;
pub mod state;

declare_id!("2g4TRtHYKE7JYGAiERpmfs5FFZTaqsrjDDgVRPEpTgg6");

#[program]
pub mod CWall {
    use super::*;
    
    pub fn wall_mint(ctx: Context<WallMint>, title : String, description : String) -> Result<()> {
        instructions::mint_wall::wall_mint(ctx, title, description);
        Ok(())
    }

    pub fn change_title(ctx : Context<ChangeWallContent>, new_title : String) -> Result<()>  {
        instructions::wall_fns::change_title(ctx, new_title);
        Ok(())
    }

    pub fn change_desc(ctx : Context<ChangeWallContent>, new_desc : String) -> Result<()> {
        instructions::wall_fns::change_desc(ctx, new_desc);
        Ok(())
    }

    pub fn change_art1(ctx : Context<ChangeWallContent>, new_art : String) -> Result<()> {
        instructions::wall_fns::change_art1(ctx, new_art);
        Ok(())
    }

    pub fn change_art2(ctx : Context<ChangeWallContent>, new_art : String) -> Result<()> {
        instructions::wall_fns::change_art2(ctx, new_art);
        Ok(())
    }

    pub fn change_art3(ctx : Context<ChangeWallContent>, new_art : String) -> Result<()> {
        instructions::wall_fns::change_art3(ctx, new_art);
        Ok(())
    }

    pub fn change_art4(ctx : Context<ChangeWallContent>, new_art : String) -> Result<()> {
        instructions::wall_fns::change_art4(ctx, new_art);
        Ok(())
    }

    pub fn change_art5(ctx : Context<ChangeWallContent>, new_art : String) -> Result<()> {
        instructions::wall_fns::change_art5(ctx, new_art);
        Ok(())
    }

    pub fn transfer_auth(ctx : Context<ChangeWallContent>, new_auth : Pubkey) -> Result<()>  {
        instructions::wall_fns::transfer_auth(ctx, new_auth);
        Ok(())
    }

}

